package com.david.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.david.backend.models.Estado;

public interface EstadoRepositorio extends JpaRepository<Estado, Long> {
    
}