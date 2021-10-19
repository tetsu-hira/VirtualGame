<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlayerTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('players', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('player_id');
            $table->string('name');
            $table->string('sex');
            $table->integer('mental');
            $table->integer('mood');
            $table->integer('intelligence');
            $table->integer('power');
            $table->integer('technique');
            $table->integer('service');
            $table->integer('setup');
            $table->integer('rally');
            $table->integer('block');
            $table->integer('agility');
            $table->integer('toss');
            $table->integer('receive');
            $table->integer('stamina');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('players');
    }
}