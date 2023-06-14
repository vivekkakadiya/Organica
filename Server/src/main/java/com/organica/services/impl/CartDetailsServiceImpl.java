package com.organica.services.impl;

import com.organica.payload.CartDetailDto;
import com.organica.payload.CartHelp;
import com.organica.repositories.CartDetailsRepo;
import com.organica.repositories.CartRepo;
import com.organica.repositories.UserRepo;
import com.organica.services.CartDetailsService;
import org.springframework.beans.factory.annotation.Autowired;

public class CartDetailsServiceImpl implements CartDetailsService{

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private CartRepo cartRepo;




    @Override
    public CartDetailDto addProduct(CartHelp cartHelp) {
        int productId=cartHelp.getProductId();
        int quantity= cartHelp.getQuantity();
        String userEmail= cartHelp.getUserEmail();




        //get user





        return null;
    }
}
