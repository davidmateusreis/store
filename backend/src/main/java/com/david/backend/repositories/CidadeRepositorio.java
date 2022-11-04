package com.david.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.david.backend.models.Cidade;

public interface CidadeRepositorio extends JpaRepository<Cidade, Long> {
    
}
