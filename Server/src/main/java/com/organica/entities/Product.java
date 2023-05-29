package com.organica.entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@NoArgsConstructor
@Data
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ProductId;
    @Column
    private String ProductName;

    private String Description;
    private Float Price;
    private Float Weight;
    @Column(length = 65555)
    private byte[] Img;

    @OneToMany(mappedBy = "product",cascade = CascadeType.REMOVE)
    private List<CartDetails> cartDetails;
}
