package com.organica.services;

import com.organica.payload.CartDetailDto;
import com.organica.payload.CartHelp;
import org.springframework.stereotype.Service;

@Service
public interface CartDetailsService {

    //add product
    public CartDetailDto addProduct(CartHelp cartHelp);
}
