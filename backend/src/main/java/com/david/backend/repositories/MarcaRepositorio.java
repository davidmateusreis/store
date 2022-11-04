package com.david.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.david.backend.models.Marca;

public interface MarcaRepositorio extends JpaRepository<Marca, Long> {
    
}
