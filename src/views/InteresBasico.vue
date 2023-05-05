<template>
    <div class="home">
      <div class="row">
            <div class="col-4">
                <b-form-group
                    id="input-group-tiempo"
                    label="Tiempo de Deposito a Plazo Fijo:"
                    label-for="input-tiempo"
                >
                    <b-form-input
                        id="input-tiempo"
                        v-model="T"
                        type="number"
                        placeholder="Tiempo de Deposito"
                        required
                    ></b-form-input>
                </b-form-group>
            </div>
            <div class="col-4">
                <b-form-group
                    id="input-group-capital"
                    label="Capital:"
                    label-for="input-costo-capital"
                 >
                    <b-form-input
                        id="input-costo-capital"
                        v-model="k"
                        type="number"
                        placeholder="Capital"
                        required
                    ></b-form-input>
                </b-form-group>
            </div>
            <div class="col-4">
                <b-form-group
                    id="input-group-tasa"
                    label="Tasa de Interes:"
                    label-for="input-tasa"
                >
                    <b-form-input
                        id="input-tasa"
                        v-model="i"
                        type="number"
                        placeholder="Tasa de Interes"
                        required
                    ></b-form-input>
                </b-form-group>
            </div>
        </div>
  
        <div class="row">
          <div class="col-6">
            <div class="contenedor">
              <div class="row">
                <b-button type="submit" variant="primary" v-on:click="calcularDeposito()">Calcular</b-button>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="contenedor">
              <div class="row">
                <b-button type="submit" variant="danger" v-on:click="limpiar()">Limpiar</b-button>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="contenedor fila">
              <b-table  sticky-header hover :items="listado" :fields="fields" head-variant="ligth"></b-table>
            </div>
          </div>
        </div>
    </div>
  </template>
  
<script>

export default {
    name: 'InteresBasico',
    data: function () {
        return {
          T: null,
          CT: null,
          k: null,
          kAux:null,
          i:null,
          iAux: null,
          INT: null,
          fields: [
            {
              key: 'CT',
              sorteable:true
            },
            {
              key: 'I',
              sorteable:false
            },
            {
              key: 'K',
              sorteable:true
            }
          ],
          listado:[],
        }
    },
    methods:{
      limpiar(){
        this.listado=[];
        this.T = null;
        this.k = null;
        this.i = null;
      },
      calcularDeposito(){
        this.listado=[];
        if(this.T!=null){
          if(this.k!=null){
            if(this.i!=null){
              this.CT=0;
              this.kAux=parseInt(this.k);
              this.iAux=this.i/100;
              while(this.CT<this.T){
                this.CT = parseInt(this.CT)+1;
                this.INT = this.kAux*this.iAux;
                this.kAux = this.kAux + this.INT;
                var obj = {
                  'CT': this.CT,
                  'I': this.INT.toFixed(2),
                  'K': this.kAux.toFixed(2)
                }
                this.listado.push(obj);
              }
            }else{
              this.mensajeError("Ingrese la Tasa de Interes")
            }
          }else{
            this.mensajeError("Ingrese el Capital")
          }
        }else{
          this.mensajeError("Ingrese el tiempo de deposito a plazo fijo")
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
