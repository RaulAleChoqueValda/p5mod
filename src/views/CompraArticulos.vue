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
                <b-button type="submit" variant="primary" v-on:click="calcular()">Calcular</b-button>
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

      <div class = "row container">
        Parametros del problema
      </div>

      <div class="row">
            <div class="col-3">
                <b-form-group
                    id="input-group-horas"
                    label=" Numero de Horas:"
                    label-for="input-horas"
                >
                    <b-form-input
                        id="input-horas"
                        v-model="nhr"
                        type="number"
                        placeholder="Numero de horas"
                        required
                    ></b-form-input>
                </b-form-group>
            </div>
            <div class="col-3">
                <b-form-group
                    id="input-group-costof"
                    label=" Costo Fijo:"
                    label-for="input-costo-costof"
                >
                    <b-form-input
                        id="input-costo-costof"
                        v-model="cfijo"
                        type="number"
                        placeholder="Costo Fijo"
                        required
                    ></b-form-input>
                </b-form-group>
            </div>
            <div class="col-3">
                <b-form-group
                    id="input-group-precio-venta"
                    label="Precio Unitario de Venta Articulo:"
                    label-for="input-precio-venta"
                >
                    <b-form-input
                        id="input-precio-venta"
                        v-model="puv"
                        type="number"
                        placeholder=" Precio de Venta Articulo "
                        required
                    ></b-form-input>
                </b-form-group>
            </div>
            <div class = "col-3">
              <b-form-group
                    id="input-group-precio-compra"
                    label="Precio Unitario de Compra Articulo:"
                    label-for="input-precio-compra"
                >
                    <b-form-input
                        id="input-precio-compra"
                        v-model="puc"
                        type="number"
                        placeholder=" Precio de Compra Articulo "
                        required
                    ></b-form-input>
                </b-form-group> 
          </div>
        </div>

        <div class = "row container">
            <div class="col-6">
                Llegada de Clientes por hora (D. Uniforme)
            </div>
            <div class="col-6">
                Compra de Articulos por cliente
            </div>
        </div>

        <div class="row">
          <div class="col-3">
              <b-form-group
                    id="input-group-minimo"
                    label="Minimo:"
                    label-for="input-minimo"
                >
                    <b-form-input
                        id="input-minimo"
                        v-model="min"
                        type="number"
                        placeholder=" Minimo "
                        required
                    ></b-form-input>
                </b-form-group> 
          </div>
          <div class="col-3">
              <b-form-group
                    id="input-group-maximo"
                    label="Maximo:"
                    label-for="input-maximo"
                >
                    <b-form-input
                        id="input-maximo"
                        v-model="max"
                        type="number"
                        placeholder=" Maximo "
                        required
                    ></b-form-input>
                </b-form-group> 
          </div>
          <div class="col-2">
            <b-card bg-variant=""  header="Articulos" class="text-center">
                <b-card-text>
                Probabilidad
                </b-card-text>
            </b-card>
          </div>
          <div class="col-1">
            <b-card bg-variant=""  header="0" class="text-center">
                <b-card-text>
                0.2
                </b-card-text>
            </b-card>
          </div>
          <div class="col-1">
            <b-card bg-variant=""  header="1" class="text-center">
                <b-card-text>
                0.3
                </b-card-text>
            </b-card>
          </div>
          <div class="col-1">
            <b-card bg-variant=""  header="2" class="text-center">
                <b-card-text>
                0.4
                </b-card-text>
            </b-card>
          </div>
          <div class="col-1">
            <b-card bg-variant=""  header="3" class="text-center">
                <b-card-text>
                0.1
                </b-card-text>
            </b-card>
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
                    Media de Articulos Vendidos:
                    <b-input-group prepend="TCART" class="mt-1" >
                        <b-form-input v-model="tcartMed" disabled></b-form-input>
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
    name: 'AgenciaAzucar',
    data: function () {
        return {
            sim: null,
            nhr: null,
            cfijo: null,
            puv: null, 
            puc: null,
            min: null,
            max: null,
            chr: null,
            tcart: null,
            cclie: null,
            gneta: null,
            llecli: null,
            rcart: null,
            cart: null,
            fields: [
            {
              key: 'SIM',
              sorteable:true
            },
            {
              key: 'TCART',
              sorteable:false
            },
            {
              key: 'GNETA(Bs)',
              sorteable:true
            }
          ],
          listado:[],
          tcartSum: null,
          tcartMed: null,
          gnetaSum : null,
          gnetaMed : null
        }
    },
    methods:{
        limpiar(){
            this.listado = [];
            this.sim = null;
            this.nhr = null;
            this.cfijo = null;
            this.puv = null;
            this.puc = null;
            this.min = null;
            this.max = null;
            this.gnetaMed = null;
            this.tcart = null;
        },
        calcular(){
            this.listado = [];
            if(this.sim != null && this.sim>0){
                if(this.cfijo != null){
                    if(this.puv != null){
                        if(this.puc != null){
                            if(this.min<this.max){
                                this.gnetaMed = 0;
                                this.gnetaSum = 0;
                                this.tcartMed = 0;
                                this.tcartSum = 0;
                                for(var l=0; l<this.sim; l++){
                                    
                                    this.tcart = 0;
                                    
                                    for(var i=0; i<this.nhr; i++){
                                        this.llecli = Math.round(this.min + (this.max - this.min) * Math.random());
                                        console.log(this.llecli)
                                        if(this.llecli > 0){
                                            for(var c=0; c < this.llecli; c++){
                                                this.rcart = Math.random();
                                                if(this.rcart <= 0.20){
                                                    this.cart = 0;
                                                }
                                                if(0.20 < this.rcart <= 0.50){
                                                    this.cart = 1;
                                                }
                                                if(0.50 < this.rcart <= 0.90){
                                                    this.cart = 2;
                                                }
                                                if(0.90 < this.rcart <=1){
                                                    this.cart = 3;
                                                }
                                                this.tcart = parseFloat(this.tcart) + parseFloat(this.cart);                                           
                                            }
                                        }
                                    }   
                                    this.gneta = parseFloat(this.tcart) * (parseFloat(this.puv) - parseFloat(this.puc))- parseFloat(this.cfijo);
                                    var obj = {
                                        'SIM' : l+1,
                                        'TCART' : this.tcart,
                                        'GNETA(Bs)' : this.gneta.toFixed(2)
                                    }
                                    this.listado.push(obj);
                                    this.gnetaSum = parseFloat(this.gnetaSum) + parseFloat(this.gneta.toFixed(2));
                                    this.tcartSum = parseFloat(this.tcartSum) + parseFloat(this.tcart);
                                }
                                var auxtcartMed = this.tcartSum / parseInt(this.sim);
                                this.tcartMed = auxtcartMed.toFixed(2);
                                var auxgnetaMed = this.gnetaSum / parseInt(this.sim);
                                this.gnetaMed = auxgnetaMed.toFixed(2);
                                this.mensajeAceptar("Se termino la simulacion");
                                //this.tcartMed = Math.round(this.tcartMed)
                            }else{
                                this.mensajeError("Ingrese los rangos de manera correcta")
                            }
                        }else{
                            this.mensajeError("Ingrese un numero")   
                        }
                    }else{
                        this.mensajeError("Ingrese un numero")
                    }
                }else{
                    this.mensajeError("Ingrese un numero")
                }
            }else{
                this.mensajeError("Ingrese un numero positivo")
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