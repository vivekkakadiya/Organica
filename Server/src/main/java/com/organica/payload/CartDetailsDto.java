package com.organica.payload;

import com.organica.entities.Product;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

public class CartDetailsDto {

    private Product product;
    private int Quntity;
}
