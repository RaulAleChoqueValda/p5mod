<template>
    <div class="home">
        <div class="row">
            <div class="col-6">
                <b-form-group
                    id="input-group-simulaciones"
                    label=" Numero de Simulaciones:"
                    label-for="input-simulaciones"
                >
                    <b-form-input
                        id="input-simulaciones"
                        v-model="sim"
                        type="number"
                        placeholder="Numero de Simulaciones"
                        required
                    ></b-form-input>
                </b-form-group>
            </div>
            <div class="col-3">
                <div class="contenedor">
                    <div class="row">
                        <b-button type="submit" variant="primary" v-on:click="simularLanzamiento()">Calcular</b-button>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="contenedor">
                    <div class="row">
                        <b-button type="submit" variant="danger" v-on:click="limpiar()">Limpiar</b-button>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-4">
                <b-form-group
                    id="input-group-juegos"
                    label=" Numero de Juegos:"
                    label-for="input-juegos"
                >
                    <b-form-input
                        id="input-juegos"
                        v-model="nMaxJ"
                        type="number"
                        placeholder="Numero de Juegos"
                        required
                    ></b-form-input>
                </b-form-group>
            </div>
            <div class="col-4">
                <b-form-group
                    id="input-group-juegos"
                    label=" Costo del Juegos:"
                    label-for="input-costo-juego"
                >
                    <b-form-input
                        id="input-costo-juego"
                        v-model="costoJuego"
                        type="number"
                        placeholder="Costo del Juegos"
                        required
                    ></b-form-input>
                </b-form-group>
            </div>
            <div class="col-4">
                <b-form-group
                    id="input-group-ganancia-jugador"
                    label=" Ganancia del Jugador:"
                    label-for="input-ganancia-jugador"
                >
                    <b-form-input
                        id="input-ganancia-jugador"
                        v-model="gananciaJugador"
                        type="number"
                        placeholder="Ganancia del Jugador"
                        required
                    ></b-form-input>
                </b-form-group>
            </div>
        </div>
        <div class="row">
            <div class="col-8">
                <div class="contenedor fila">
                    <b-table  sticky-header hover :items="listado" :fields="fields" head-variant="ligth"></b-table>
                </div>
            </div>
            <div class="col-4">
                <div class="contenedor">
                <b-card bg-variant="light"  header="Promedio de Resultados" class="text-center">
                    <b-card-text>
                    Ganancia neta media de la casa (Bs):
                    <b-input-group prepend="GNETA" class="mt-1" >
                        <b-form-input v-model="gnetaMed" disabled></b-form-input>
                    </b-input-group>
                    </b-card-text>
                    <b-card-text>
                    Num. de Juegos Ganados por la Casa:
                    <b-input-group prepend="NJCASA" class="mt-1" >
                        <b-form-input v-model="njcasaMed" disabled></b-form-input>
                    </b-input-group>
                    </b-card-text>
                    <b-card-text>
                    Porcentaje de Juegos Ganados por la Casa:
                    <b-input-group prepend="PJCASA" class="mt-1" >
                        <b-form-input v-model="pjcasaMed" disabled></b-form-input>
                    </b-input-group>
                    </b-card-text>
                </b-card>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'LanzamientoDados',
    data: function () {
        return {
            sim: null,
            nMaxJ: null,
            cjue: null,
            dado1: null,
            dado2: null,
            rdado1: null,
            rdado2: null,
            sumdados: null,
            costoJuego: null,
            gananciaJugador: null,
            gneta: null,
            njcasa: null,
            pjcasa: null,
            fields: [
                {
                key: 'SIM',
                sorteable:true
                },
                {
                key: 'GNETA(Bs)',
                sorteable:false
                },
                {
                key: 'NJCASA',
                sorteable:true
                },
                {
                key: 'PJCASA(%)',
                sorteable:true
                }
            ],
            listado:[],
            gnetaMed : null,
            gnetaSum : null,
            njcasaMed : null,
            njcasaSum : null,
            pjcasaMed : null,
            pjcasaSum : null
        }
    },
    methods:{
        limpiar(){
            this.listado = [];
            this.sim = null;
            this.nMaxJ = null;
            this.costoJuego = null;
            this.gananciaJugador = null;
            this.gnetaMed = null;
            this.njcasaMed = null;
            this.pjcasaMed = null
        },
        simularLanzamiento(){
            this.listado=[];
            this.gnetaSum = 0;
            this.gnetaMed = 0;
            this.njcasaSum = 0;
            this.njcasaMed = 0;
            this.pjcasaSum = 0;
            this.pjcasaMed = 0;
            if(this.sim != null && this.sim > 0){
                if(this.nMaxJ != null && this.nMaxJ > 0){
                    if(this.costoJuego != null && this.costoJuego > 0){
                        if(this.gananciaJugador != null && this.gananciaJugador > 0){
                            for(var i=1;i<=this.sim;i++){
                                this.cjue = 0;
                                this.gneta = 0;
                                this.njcasa = 0;
                                this.sumdados = 0;
                                this.pjcasa = 0;
                                while (this.cjue < this.nMaxJ){
                                    this.cjue = this.cjue + 1
                                    this.rdado1 = Math.random();
                                    this.rdado2 = Math.random();
                                    this.dado1 = Math.round(1+5*this.rdado1);
                                    this.dado2 = Math.round(1+5*this.rdado2);
                                    this.sumdados = this.dado1 + this.dado2;
                                    if(this.sumdados != 7){
                                        this.gneta = this.gneta + parseFloat(this.costoJuego);
                                        this.njcasa = this.njcasa + 1;
                                    }else{
                                        this.gneta = this.gneta + parseFloat(this.costoJuego) - parseFloat(this.gananciaJugador);
                                    }
                                }
                                this.pjcasa= (this.njcasa / this.nMaxJ) * 100;
                                var obj ={
                                    'SIM' : i,
                                    'GNETA(Bs)' : this.gneta.toFixed(2),
                                    'NJCASA' : this.njcasa,
                                    'PJCASA(%)' : this.pjcasa.toFixed(2)
                                }
                                this.listado.push(obj);
                                this.gnetaSum = this.gnetaSum + parseFloat(this.gneta.toFixed(2));
                                this.njcasaSum = this.njcasaSum + this.njcasa;
                                this.pjcasaSum = this.pjcasaSum + parseFloat(this.pjcasa.toFixed(2));
                            }
                            var auxgneta = this.gnetaSum / parseInt(this.sim);
                            this.gnetaMed = auxgneta.toFixed(2);
                            var auxnjcasa = this.njcasaSum.toFixed(2) / parseInt(this.sim);
                            this.njcasaMed = auxnjcasa.toFixed(2);
                            var auxpjcasa = this.pjcasaSum.toFixed(2) / parseInt(this.sim);
                            this.pjcasaMed = auxpjcasa.toFixed(2);
                            this.mensajeAceptar("Se termino la simulacion");
                        }else{
                            this.mensajeError("Ingrese un valor mayor a 0")
                        }
                    }else{
                        this.mensajeError("Ingrese un valor mayor a 0")
                    }
                }else{
                    this.mensajeError("Ingrese un numero mayor a 0")
                }
            }else{
                this.mensajeError("Ingrese un numero mayor a 0")
            }
        },
        mensajeAceptar(nombre){
            this.$swal({
            title: nombre,
            icon: 'success',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#3085d6',                
            });
        },
        mensajeError(nombre){
            this.$swal({
            title: nombre,
            icon: 'error',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#3085d6',                
            });
        }
    }
}
</script>

<style scoped>
.contenedor{
  width: 96% ;
  margin: 2% 2%;
}
.fila{
  margin:1%;
}
</style>