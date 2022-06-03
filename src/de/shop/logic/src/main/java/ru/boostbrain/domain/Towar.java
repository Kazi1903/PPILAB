package ru.boostbrain.domain;


import javax.persistence.*;
import java.util.List;

@Entity
public class Towar {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name;
    private int price;


    @OneToMany
    private List<TowarInOrder> towarInOrders;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public List<TowarInOrder> getTowarInOrders() {
        return towarInOrders;
    }

    public void setTowarInOrders(List<TowarInOrder> towarInOrders) {
        this.towarInOrders = towarInOrders;
    }
}
