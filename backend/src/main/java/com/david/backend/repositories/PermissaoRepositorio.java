package com.david.backend.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.david.backend.models.Permissao;

public interface PermissaoRepositorio extends JpaRepository<Permissao, Long> {
    
    List<Permissao> findByNome(String nome);
}
