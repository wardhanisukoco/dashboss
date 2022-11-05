<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', \App\Http\Controllers\HomeController::class);

Route::get('/register', [\App\Http\Controllers\Auth\RegisterController::class, 'index']);
Route::post('/register', [\App\Http\Controllers\Auth\RegisterController::class, 'store']);


Route::get('/login', [\App\Http\Controllers\Auth\LoginController::class, 'index']);
Route::post('/login', [\App\Http\Controllers\Auth\LoginController::class, 'store']);

Route::post('/logout', [\App\Http\Controllers\Auth\LoginController::class, 'destroy'])->middleware('auth');

Route::get('/dashboard', \App\Http\Controllers\DashboardController::class)->middleware('auth');
Route::get('/report', \App\Http\Controllers\ReportController::class)->middleware('auth');
