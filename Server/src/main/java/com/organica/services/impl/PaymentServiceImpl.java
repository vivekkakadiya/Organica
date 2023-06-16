package com.organica.services.impl;

import com.organica.payload.PaymentDetails;
import com.organica.services.PaymentService;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import org.json.JSONObject;
import org.springframework.stereotype.Service;

@Service
public class PaymentServiceImpl implements PaymentService {

    private final String KEY="rzp_test_EUYgqpwVUn0wDP";
    private final String SECRET_KEY="lNNKB1lIXajXLNl8ktre66OW";
    private final String CURRENCY="INR";


    @Override
    public PaymentDetails CreateOrder(Double amount) {
        try{
            JSONObject jsonObject=new JSONObject();
            jsonObject.put("amount",amount*100.0);
            jsonObject.put("currency",CURRENCY);
            System.out.println(jsonObject);

        RazorpayClient razorpayClient=new RazorpayClient(KEY,SECRET_KEY);

            Order order= razorpayClient.orders.create(jsonObject);



        return prepatreTransaction(order);


        }catch (Exception e){
            System.out.println(e);
        }
        return null;
    }


    private PaymentDetails prepatreTransaction(Order order){
        String orderId=order.get("id");
        Integer amount=order.get("amount");
        String currency=order.get("currency");

        PaymentDetails paymentDetails=new PaymentDetails(orderId,amount,currency,KEY);
        return paymentDetails;
    }
}
