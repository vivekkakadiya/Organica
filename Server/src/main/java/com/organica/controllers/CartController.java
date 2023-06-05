package com.organica.controllers;


import com.organica.entities.Cart;
import com.organica.payload.CartDto;
import com.organica.payload.CartHelp;
import com.organica.payload.UserDto;
import com.organica.services.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cart")
public class CartController {

    @Autowired
    private CartService cartService;


    @PostMapping("/addproduct")
    public ResponseEntity<CartDto> addProduct(@RequestBody CartHelp cartHelp){
//        System.out.println(cartHelp.getProductId());
        CartDto cartDto = this.cartService.addProductToCart(cartHelp);

        return new ResponseEntity<>(cartDto, HttpStatusCode.valueOf(200));
    }

    @GetMapping("/{userid}")
    public ResponseEntity<CartDto> GetCart(@PathVariable Integer userid){

        CartDto cartDto = this.cartService.GetCart(userid);

        return new ResponseEntity<>(cartDto, HttpStatusCode.valueOf(200));
    }
}
