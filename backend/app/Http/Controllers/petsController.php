<?php

namespace App\Http\Controllers;

use App\Models\pet;

use Illuminate\Http\Request;

class petsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $pets = pet::all();
        return json_encode(["pets" => $pets]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $pet = new pet();
        $pet -> name = $request -> name;
        $pet -> age = $request -> age;
        $pet -> service = $request -> service;
        $pet -> save();
        return json_encode(["success" => true, "message" => "Servicio de mascota creado exitosamente!"]);

    }

}
