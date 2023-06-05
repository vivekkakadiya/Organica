package com.organica.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class CartDetailDto {

    private int CartDetalisId;
    private ProductDto products;
    private int Quantity;
    private int Amount;

//    private CartDto cart;
}
