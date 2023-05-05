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
            <div class="col-4">
                <b-form-group
                    id="input-group-dias"
                    label=" Numero de Dias:"
                    label-for="input-dias"
                >
                    <b-form-input
                        id="input-dias"
                        v-model="ndias"
                        type="number"
                        placeholder="Numero de dias"
                        required
                    ></b-form-input>
                </b-form-group>
            </div>
            <div class="col-4">
                <b-form-group
                    id="input-group-capacidad"
                    label=" Capacidad Bodega:"
                    label-for="input-capacidad"
                >
                    <b-form-input
                        id="input-capacidad"
                        v-model="capBodega"
                        type="number"
                        placeholder="Capacidad Bodega"
                        required
                    ></b-form-input>
                </b-form-group>
            </div>
            <div class="col-4">
                <b-form-group
                    id="input-group-costo-inventario"
                    label="Costo Unitario de Inv.:"
                    label-for="input-costo-inventario"
                >
                    <b-form-input
                        id="input-costo-inventario"
                        v-model="cui"
                        type="number"
                        placeholder=" Costo Unitario de Inv. "
                        required
                    ></b-form-input>
                </b-form-group>
            </div>
        </div>

        <div class="row">
            <div class="col-4">
                <b-form-group
                    id="input-group-costo-venta"
                    label=" Costo Unitario de Venta:"
                    label-for="input-costo-venta"
                >
                    <b-form-input
                        id="input-costo-venta"
                        v-model="cuv"
                        type="number"
                        placeholder=" Costo Unitario de Venta"
                        required
                    ></b-form-input>
                </b-form-group>
            </div>
            <div class="col-4">
                <b-form-group
                    id="input-group-costo-adquisicion"
                    label=" Costo Unitario de Adquisicion:"
                    label-for="input-costo-adquisicion"
                >
                    <b-form-input
                        id="input-costo-adquisicion"
                        v-model="cua"
                        type="number"
                        placeholder="Costo Unitario de Adquisicion"
                        required
                    ></b-form-input>
                </b-form-group>
            </div>
            <div class="col-4">
                <b-form-group
                    id="input-group-costo-reorden"
                    label="Costo de Reorden:"
                    label-for="input-costo-reorden"
                >
                    <b-form-input
                        id="input-costo-reorden"
                        v-model="creorden"
                        type="number"
                        placeholder="Costo de Reorden"
                        required
                    ></b-form-input>
                </b-form-group>
            </div>
        </div>
        <div class = "row container">
            Demanda de Azucar (D. Exponencial)
        </div>

        <div class="row">
          <div class="col-4">
                <b-form-group
                    id="input-group-demanda-azucar"
                    label="Demanda de Azucar (Media):"
                    label-for="input-demanda-azucar"
                >
                    <b-form-input
                        id="input-demanda-azucar"
                        v-model="demanda"
                        type="number"
                        placeholder="Demanda de Azucar"
                        required
                    ></b-form-input>
                </b-form-group>
          </div>
        </div>
        <div class = "row container">
            Tiempo de Entrega (D. Uniforme)
        </div>

        <div class="row">
          <div class="col-2">
                <b-form-group
                    id="input-group-minimo"
                    label="Minimo:"
                    label-for="input-minimo"
                >
                    <b-form-input
                        id="input-minimo"
                        v-model="minimo"
                        type="number"
                        placeholder="Minimo"
                        required
                    ></b-form-input>
                </b-form-group>
          </div>
          <div class="col-2">
                <b-form-group
                    id="input-group-maximo"
                    label="Maximo:"
                    label-for="input-maximo"
                >
                    <b-form-input
                        id="input-maximo"
                        v-model="maximo"
                        type="number"
                        placeholder="Maximo"
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
                    Ganancia neta media (Bs):
                    <b-input-group prepend="GNETA" class="mt-1" >
                        <b-form-input v-model="gnetaMed" disabled></b-form-input>
                    </b-input-group>
                    </b-card-text>
                    <b-card-text>
                    Costo Total Medio:
                    <b-input-group prepend="CTOT" class="mt-1" >
                        <b-form-input v-model="ctotMed" disabled></b-form-input>
                    </b-input-group>
                    </b-card-text>
                    <b-card-text>
                    Demanda Insatisfecha Media:
                    <b-input-group prepend="DINS" class="mt-1" >
                        <b-form-input v-model="dinsMed" disabled></b-form-input>
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
            ndias : null,
            capBodega : null,
            cui : null,
            cuv : null,
            cua : null,
            creorden : null,
            demanda : null,
            maximo : null,
            minimo: null,
            gneta : null,
            gnetaMed : null,
            gnetaSum : null,
            ctot : null,
            ctotMed : null,
            ctotSum : null,
            dins: null,
            dinsMed : null,
           
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
                key: 'CTOT(Bs)',
                sorteable:true
                },
                {
                key: 'DINS',
                sorteable:true
                }
            ],
            listado:[],
        }
    },
    methods:{
        limpiar(){
            this.listado = [];
            this.sim = null;
            this.ndias = null;
            this.capBodega = null;
            this.cui =null;
            this.creorden = null;
            this.cuv = null;
            this.cua = null;
            this.demanda = null;
            this.minimo = null;
            this.maximo = null;
            this.gnetaMed = null;
            this.ctot = null;
            this.dins = null;
        },
        calcular(){
            this.listado = [];
            if(this.sim != null && this.sim > 0){
                if(this.ndias != null && this.ndias > 0){
                    if(this.capBodega != null && this.capBodega > 0){
                        if(this.cui != null && this.cuv != null && this.cua != null && this.creorden != null){
                            if(this.demanda != null && this.demanda >= 0){
                                if(this.minimo != null && this.maximo!= null && this.minimo<this.maximo){
                                    this.gnetaSum = 0;
                                    this.ctotSum = 0;
                                    var dinsSum = 0;
                                    this.gnetaMed = 0;
                                    this.ctotMed = 0;
                                    this.dinsMed = 0;
                                    for(var s = 1; s <= this.sim ; s++ ){
                                        var pazu = 0;
                                        var inv = parseFloat(this.capBodega);
                                        var cadq = parseFloat(this.capBodega) * parseFloat(this.cua);
                                        var ctord = parseFloat(this.creorden);
                                        this.dins = 0;
                                        var tent = 0;
                                        var dazu = 0;
                                        var ibru = 0;
                                        var cinv = 0;
                                        this.ctot = 0;
                                        this.gneta = 0;
                                        for(var d = 1; d <= this.ndias; d++ ){
                                            if(d % 7 == 0){
                                                pazu = parseFloat(this.capBodega) - parseFloat(inv);
                                                cadq = cadq + parseFloat(pazu) * parseFloat(this.cua);
                                                ctord = parseFloat(ctord) + parseFloat(this.creorden);
                                                tent = Math.round(parseFloat(this.minimo)+(parseFloat(this.maximo)-parseFloat(this.minimo))*Math.random())
                                                
                                                dazu = Math.round(-(parseFloat(this.demanda)) * Math.log (1 - Math.random()));
                                                if(inv >= dazu){
                                                    inv = parseFloat(inv) - parseFloat(dazu);
                                                    ibru = parseFloat(ibru) + parseFloat(dazu) * parseFloat(this.cuv);
                                                    cinv = parseFloat(cinv) + parseFloat(inv) * parseFloat(this.cui);
                                                }else{
                                                    this.dins = parseFloat(this.dins) + parseFloat(dazu) - parseFloat(inv);
                                                    ibru = parseFloat(ibru) + parseFloat(inv) * parseFloat(this.cuv);
                                                    inv = 0;
                                                }
                                            }else{
                                                if(tent == 0 ){
                                                    dazu = Math.round( -(parseFloat(this.demanda)) * Math.log (1 - Math.random()));
                                                    if(inv >= dazu){
                                                        inv = parseFloat(inv) - parseFloat(dazu);
                                                        ibru = parseFloat(ibru) + parseFloat(dazu) * parseFloat(this.cuv);
                                                        cinv = parseFloat(cinv) + parseFloat(inv) * parseFloat(this.cui);
                                                    }else{
                                                        this.dins = parseFloat(this.dins) + parseFloat(dazu) - parseFloat(inv);
                                                        ibru = parseFloat(ibru) + parseFloat(inv) * parseFloat(this.cuv);
                                                        inv = 0;
                                                    }
                                                }else{
                                                    tent = tent - 1
                                                    if(tent == 0){
                                                        inv = inv + pazu;
                                                        dazu = Math.round( -(parseFloat(this.demanda)) * Math.log (1 - Math.random()));
                                                        if(inv >= dazu){
                                                            inv = parseFloat(inv) - parseFloat(dazu);
                                                            ibru = parseFloat(ibru) + parseFloat(dazu) * parseFloat(this.cuv);
                                                            cinv = parseFloat(cinv) + parseFloat(inv) * parseFloat(this.cui);
                                                        }else{
                                                            this.dins = parseFloat(this.dins) + parseFloat(dazu) - parseFloat(inv);
                                                            ibru = parseFloat(ibru) + parseFloat(inv) * parseFloat(this.cuv);
                                                            inv = 0;
                                                        }
                                            
                                                    }else{
                                                        dazu = Math.round( -(parseFloat(this.demanda)) * Math.log (1 - Math.random()));
                                                        if(inv >= dazu){
                                                            inv = parseFloat(inv) - parseFloat(dazu);
                                                            ibru = parseFloat(ibru) + parseFloat(dazu) * parseFloat(this.cuv);
                                                            cinv = parseFloat(cinv) + parseFloat(inv) * parseFloat(this.cui);
                                                        }else{
                                                            this.dins = parseFloat(this.dins) + parseFloat(dazu) - parseFloat(inv);
                                                            ibru = parseFloat(ibru) + parseFloat(inv) * parseFloat(this.cuv);
                                                            inv = 0;
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        
                                        this.ctot = cinv + cadq + ctord;
                                        this.gneta = ibru - parseFloat(this.ctot.toFixed(2));

                                        var obj = {
                                            'SIM': s,
                                            'GNETA(Bs)': this.gneta.toFixed(2),
                                            'CTOT(Bs)': this.ctot.toFixed(2),
                                            'DINS' : this.dins.toFixed(2)
                                        }

                                        this.listado.push(obj);

                                        this.gnetaSum = parseFloat(this.gnetaSum) + parseFloat(this.gneta.toFixed(2));
                                        this.ctotSum = parseFloat(this.ctotSum) + parseFloat(this.ctot.toFixed(2));
                                        dinsSum = parseFloat(dinsSum) + parseFloat(this.dins.toFixed(2));
                                        console.log(dinsSum)
                                    }
                                    


                                    this.gnetaMed = parseFloat(this.gnetaSum) / parseFloat(this.sim);
                                    this.gnetaMed = this.gnetaMed.toFixed(2);

                                    this.ctotMed = parseFloat(this.ctotSum) / parseFloat(this.sim);
                                    this.ctotMed = this.ctotMed.toFixed(2);

                                    this.dinsMed = parseFloat(dinsSum) / parseFloat(this.sim);
                                    this.dinsMed = this.dinsMed.toFixed(2);
                                    this.mensajeAceptar("Se termino la simulacion");
                                }else{
                                    this.mensajeError("Ingrese los rangos de manera correcta")
                                }
                            }else{
                                this.mensajeError("Ingrese una demanda mayor a 0")
                            }
                        }else{
                            this.mensajeError("Ingrese un numero mayor a 0")
                        }
                    }else{
                        this.mensajeError("Ingrese un numero mayor a 0")
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