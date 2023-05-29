package com.organica.entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@NoArgsConstructor
@Data
public class CartDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int CartDetailsId;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;
    private int Quntity;

}
