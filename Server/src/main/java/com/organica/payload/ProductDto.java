package com.organica.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class ProductDto {
    private int Productid;
    private String ProductName;
    private String Description;
    private Float Price;
    private Float Weight;
    private byte[] Img;
}
