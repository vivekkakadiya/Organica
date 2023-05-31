package com.organica.payload;

import com.organica.entities.CartDetails;
import com.organica.entities.User;

import java.util.List;

public class CartDto {
    private int CartId;

    private User user;
    private float Amount;

    private List<CartDetails> cartDetails;
}
