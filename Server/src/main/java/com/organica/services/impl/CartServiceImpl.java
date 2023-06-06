package com.organica.services.impl;

import com.organica.entities.Cart;
import com.organica.entities.CartDetalis;
import com.organica.entities.Product;
import com.organica.entities.User;
import com.organica.payload.*;
import com.organica.repositories.CartDetailsRepo;
import com.organica.repositories.CartRepo;
import com.organica.repositories.ProductRepo;
import com.organica.repositories.UserRepo;
import com.organica.services.CartService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;
import java.util.concurrent.atomic.AtomicReference;
import java.util.stream.Collectors;
import java.util.zip.DataFormatException;
import java.util.zip.Inflater;

@Service
public class CartServiceImpl implements CartService {

    @Autowired
    private ProductRepo productRepo;

    @Autowired
    private CartRepo cartRepo;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private CartDetailsRepo cartDetailsRepo;

    @Autowired
    private ModelMapper modelMapper;



    @Override
    public CartDto CreateCart(CartHelp cartHelp) {
        return null;
    }

    @Override
    public CartDto addProductToCart(CartHelp cartHelp) {

        int productId=cartHelp.getProductId();
        int quantity= cartHelp.getQuantity();
        int userId= cartHelp.getUserId();
        int total=0;
        AtomicReference<Integer> totalAmount =new AtomicReference<>(0);

        User user= this.userRepo.findById(userId).orElseThrow();

        Product product=this.productRepo.findById(productId).orElseThrow();

        //create cart detail

        CartDetalis cartDetalis = new CartDetalis();
        cartDetalis.setProducts(product);
        cartDetalis.setQuantity(quantity);
        cartDetalis.setAmount((int) (product.getPrice()*quantity));

        Cart cart=user.getCart();

        if(cart==null){
            Cart cart1=new Cart();
            cart.setUser(user);

            int totalAmount2=0;



            CartDetalis cartDetalis1= new CartDetalis();
            cartDetalis1.setQuantity(quantity);
            cartDetalis1.setProducts(product);
            cartDetalis1.setAmount((int) (product.getPrice()*quantity));
            totalAmount2= cartDetalis1.getAmount();


            List<CartDetalis> pro=cart.getCartDetalis();
            pro.add(cartDetalis1);
            cart1.setCartDetalis(pro);
            cart1.setTotalAmount(totalAmount2);
            cartDetalis1.setCart(cart1);

            for (CartDetalis i:pro ) {
                Product p=i.getProducts();
                p.setImg(decompressBytes(p.getImg()));
            }

            return this.modelMapper.map(cart1,CartDto.class);



        }

        cartDetalis.setCart(cart);


        List<CartDetalis> list=cart.getCartDetalis();

        AtomicReference<Boolean> flag=new AtomicReference<>(false);

        List<CartDetalis> newProduct = list.stream().map((i) -> {
            if (i.getProducts().getProductId() == productId) {
                i.setQuantity(quantity);
                i.setAmount((int) (i.getQuantity() * product.getPrice()));
                flag.set(true);
            }
            totalAmount.set(totalP(i.getAmount(),totalAmount.get()));
            
            return i;
        }).collect(Collectors.toList());
        for (CartDetalis i:list ) {
            Product p=i.getProducts();
            p.setImg(decompressBytes(p.getImg()));
        }

        if (flag.get()){
            list.clear();
            list.addAll(newProduct);

        }else {

            cartDetalis.setCart(cart);
            totalAmount.set((int) (quantity*product.getPrice()));
            list.add(cartDetalis);

        }
        cart.setCartDetalis(list);
        cart.setTotalAmount(totalAmount.get());
        System.out.println(cart.getTotalAmount());
        Cart save = this.cartRepo.save(cart);
        return this.modelMapper.map(save,CartDto.class);
    }

    @Override
    public CartDto GetCart(Integer Userid) {
        User user = this.userRepo.findById(Userid).orElseThrow();
        Cart byUser = this.cartRepo.findByUser(user);


        //img convert
        List<CartDetalis> cartDetalis = byUser.getCartDetalis();
        for (CartDetalis i:cartDetalis ) {
            Product p=i.getProducts();
            p.setImg(decompressBytes(p.getImg()));
        }
//        cartDetalis.stream().map(i->{
//
//           i.setProducts(changeImg(i.getProducts()));
//            System.out.println(11);
//           return i;
//        });



        return this.modelMapper.map(byUser,CartDto.class);
    }

    @Override
    public void RemoveById(Integer ProductId, Integer UserId) {
        User user = this.userRepo.findById(UserId).orElseThrow();

        Product product = this.productRepo.findById(ProductId).orElseThrow();
        Cart cart =this.cartRepo.findByUser(user);

        CartDetalis byProductsAndCart = this.cartDetailsRepo.findByProductsAndCart(product, cart);

        this.cartDetailsRepo.delete(byProductsAndCart);


    }

    @Override
    public CartDto DeleteCart(Integer Userid) {
        return null;
    }










    public Product changeImg(Product product){

        product.setImg(decompressBytes(product.getImg()));

        System.out.println("hello");
        return product;
    }

    public int totalP(int t1, int total){
        return total+t1;
    }



    public static byte[] decompressBytes(byte[] data) {
        Inflater inflater = new Inflater();
        inflater.setInput(data);
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream(data.length);
        byte[] buffer = new byte[1024];
        try {
            while (!inflater.finished()) {
                int count = inflater.inflate(buffer);
                outputStream.write(buffer, 0, count);
            }
            outputStream.close();
        } catch (IOException ioe) {
        } catch (DataFormatException e) {
        }
        return outputStream.toByteArray();
    }
}