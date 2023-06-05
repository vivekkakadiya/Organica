package com.organica.repositories;

import com.organica.entities.CartDetalis;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartDetailsRepo extends JpaRepository<CartDetalis,Integer> {
}
