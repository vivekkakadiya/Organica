package com.organica.entities;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@NoArgsConstructor
@Data
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int CartId;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;
    private float Amount;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(referencedColumnName = "CartId",name = "Cart_id")
    private List<CartDetails> cartDetails;

}
