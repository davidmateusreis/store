package com.david.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.david.backend.models.Categoria;

public interface CategoriaRepositorio extends JpaRepository<Categoria, Long> {
    
}
