package com.organica.services;

import com.organica.entities.Cart;
import com.organica.payload.CartDto;
import com.organica.payload.CartHelp;
import com.organica.payload.UserDto;

public interface CartService {

    //Create
    CartDto CreateCart(CartHelp cartHelp);

    //add Product To Cart
    CartDto addProductToCart(CartHelp cartHelp);

    //Get
    CartDto GetCart(String userEmail);

    //delete product

    void RemoveById(Integer ProductId,String userEmail);

    //delete


}
