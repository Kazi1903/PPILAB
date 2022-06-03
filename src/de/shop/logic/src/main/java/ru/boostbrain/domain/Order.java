package ru.boostbrain.domain;


import javax.persistence.*;
import java.util.List;

@Entity
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;


    @OneToMany
    private List<TowarInOrder> towarInOrders;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public List<TowarInOrder> getTowarInOrders() {
        return towarInOrders;
    }

    public void setTowarInOrders(List<TowarInOrder> towarInOrders) {
        this.towarInOrders = towarInOrders;
    }
}
