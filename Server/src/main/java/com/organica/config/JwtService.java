package com.organica.config;


import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtService {

    private final String KEY="822c4707919bf892c76ad2769465cb794993931a98ec939e6e492c5317fb95e7";

    public String extractUsername(String token) {
        return extractClaim(token,Claims::getSubject);
    }



    public  <T> T extractClaim(String token, Function<Claims,T> claimResolver){
        final Claims claims =extractAllClaims(token);
        return claimResolver.apply(claims);
    }



    public String generateToken(UserDetails userDetails){
        return generateToken(new HashMap<>(),userDetails);

    }


    public boolean isTokenValid(String token,UserDetails userDetails){
        final String username= extractUsername(token);
        return (username.equals(userDetails.getUsername())) && !isTokenExpired(token);
    }

    private boolean isTokenExpired(String token) {
        return extractExpriration(token).before(new Date());
    }

    private Date extractExpriration(String token) {
        return extractClaim(token,Claims::getExpiration);
    }


    public String generateToken(
            Map<String,Object> extraClaims,
            UserDetails userDetails
    ){
        return Jwts
                .builder()
                .setClaims(extraClaims)
                .setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 24))
                .signWith(getSingInKey(), SignatureAlgorithm.HS256)
                .compact();

    }



    private Claims extractAllClaims(String token){
        return Jwts
                .parserBuilder()
                .setSigningKey(getSingInKey())
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    private Key getSingInKey() {
        byte[] keyByte= Decoders.BASE64.decode(KEY);
        return Keys.hmacShaKeyFor(keyByte);
    }
}
