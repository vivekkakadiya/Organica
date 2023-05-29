package com.organica.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@NoArgsConstructor
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Userid;

    private String FName;
    private String LName;
    private String Email;
    private String Password;
    private String Contact;


    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date date;

    private String Role;

    @OneToOne(mappedBy = "user",cascade = CascadeType.REMOVE)
    private Cart cart;
}
