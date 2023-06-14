package com.organica.services.impl;

import com.organica.config.JwtService;
import com.organica.entities.Cart;
import com.organica.entities.Role;
import com.organica.entities.TotalRoles;
import com.organica.entities.User;
import com.organica.payload.SingIn;
import com.organica.payload.UserDto;
import com.organica.repositories.UserRepo;
import com.organica.services.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {



    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoder passwordEncoder;



    @Override
    public UserDto CreateUser(UserDto userDto) {
        User user= this.modelMapper.map(userDto, User.class);
        List<Role> list= new ArrayList<>();
                list.add(new Role(TotalRoles.ADMIN.name()));
        user.setRole(list);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        Cart cart= new Cart();
        cart.setUser(user);
        user.setCart(cart);

        this.userRepo.save(user);
        return this.modelMapper.map(user,UserDto.class);
    }

    @Override
    public SingIn SingIn(SingIn singIn) {
        this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(singIn.getEmail(),singIn.getPassword()));
        User user=this.userRepo.findByEmail(singIn.getEmail());
        var jwtToken=jwtService.generateToken(user);
        singIn.setJwt(jwtToken);
        return singIn;
    }
}
