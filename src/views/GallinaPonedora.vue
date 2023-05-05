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
                    id="input-group-horas"
                    label=" Numero de Dias:"
                    label-for="input-horas"
                >
                    <b-form-input
                        id="input-horas"
                        v-model="nDias"
                        type="number"
                        placeholder="Numero de Dias"
                        required
                    ></b-form-input>
                </b-form-group>
            </div>
            <div class="col-4">
                <b-form-group
                    id="input-group-costof"
                    label=" Precio Unitario de Venta por Huevo:"
                    label-for="input-costo-costof"
                >
                    <b-form-input
                        id="input-costo-costof"
                        v-model="pHuevo"
                        type="number"
                        placeholder="Precio de venta Huevo"
                        required
                    ></b-form-input>
                </b-form-group>
            </div>
            <div class="col-4">
                <b-form-group
                    id="input-group-precio-venta"
                    label="Precio Unitario de Venta Pollo:"
                    label-for="input-precio-venta"
                >
                    <b-form-input
                        id="input-precio-venta"
                        v-model="pPollo"
                        type="number"
                        placeholder=" Precio de Venta Pollo "
                        required
                    ></b-form-input>
                </b-form-group>
            </div>
        </div>
        <div class = "row container">
          Huevos puestos por dia (Poisson)
        </div>
        <div class="row">
          <div class = "col-4">
              <b-form-group
                    id="input-group-precio-compra"
                    label="Media de Huevos por Dia:"
                    label-for="input-precio-compra"
                >
                    <b-form-input
                        id="input-precio-compra"
                        v-model="media"
                        type="number"
                        placeholder=" Media de Huevos por Dia "
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
                    Media de Huevos Sanos:
                    <b-input-group prepend="HSANOS" class="mt-1" >
                        <b-form-input v-model="hsanosMed" disabled></b-form-input>
                    </b-input-group>
                    </b-card-text>

                    <b-card-text>
                    Media de Huevos Rotos:
                    <b-input-group prepend="HROTOS" class="mt-1" >
                        <b-form-input v-model="hrotosMed" disabled></b-form-input>
                    </b-input-group>
                    </b-card-text>

                    <b-card-text>
                    Media de Pollos Vivos:
                    <b-input-group prepend="PVIVOS" class="mt-1" >
                        <b-form-input v-model="pvivosMed" disabled></b-form-input>
                    </b-input-group>
                    </b-card-text>

                    <b-card-text>
                    Media de Pollos Muertos:
                    <b-input-group prepend="PMUERTOS" class="mt-1" >
                        <b-form-input v-model="pmuertosMed" disabled></b-form-input>
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
    name: 'GallinaPonedora',
    data: function () {
        return {
          sim:null,
          nDias: null,
          pPollo: null,
          pHuevo: null,
          media: null, 
          gneta: null,
          gnetaSum : null,
          gnetaMed: null,
          hsanos: null,
          hsanosSum: null,
          hsanosMed: null,
          hrotos: null,
          hrotosSum : null,
          hrotosMed: null,
          pvivos: null,
          pvivosSum: null,
          pvivosMed: null,
          pmuertos: null,
          pmuertosSum: null,
          pmuertosMed: null,
          fields: [
              {
                key: 'SIM',
                sorteable:true
              },
              {
                key: 'GNETA(Bs)',
                sorteable:true
              },
              {
                key: 'HSANOS',
                sorteable:false
              },
              {
                key: 'HROTOS',
                sorteable:false
              },
              {
                key: 'PVIVOS',
                sorteable:false
              },
              {
                key: 'PMUERTOS',
                sorteable:false
              },
            ],
          listado:[]
        }
      },
      methods:{
        limpiar(){
          this.listado = [];
          this.sim = null;
          this.nDias = null;
          this.pHuevo = null;
          this.pPollo = null;
          this.media = null;
          this.gnetaMed = null;
          this.hsanosMed = null;
          this.hrotosMed = null;
          this.pvivosMed = null;
          this.pmuertosMed = null;
        },
        calcular(){
          this.listado = [];
          if(this.sim != null && this.sim > 0){
            if(this.nDias != null && this.nDias > 0){
              if(this.pPollo != null && this.pPollo > 0 && this.pHuevo != null && this.pHuevo > 0){
                this.hrotosSum = 0;
                  this.hrotosMed = 0;
                  this.hsanosMed = 0;
                  this.hsanosSum = 0;
                  this.pvivosMed = 0;
                  this.pvivosSum = 0;
                  this.pmuertosMed = 0;
                  this.pmuertosSum = 0;
                  this.gnetaSum = 0;
                  this.gnetaMed = 0;
                for(var s = 1; s <= this.sim ; s++ ){
                  var chp = 0;
                  this.hrotos = 0;
                  this.hsanos = 0;
                  this.pvivos = 0;
                  this.pmuertos = 0;
                 
                  for(var d = 1; d <= this.nDias; d++){
                    chp = this.poisson(this.media);
                    if(chp > 0){
                      for (var c = 1 ; c <= chp ; c++ ){
                        var rdh = Math.random();
                        if(rdh<=0.2){
                          this.hrotos = parseFloat(this.hrotos)+1;
                        }
                        if(0.2<rdh<=0.5){
                          var rpollo = Math.random();
                          if(rpollo<0.2){
                            this.pmuertos = parseFloat(this.pmuertos) + 1;
                          }else{
                            this.pvivos = parseFloat(this.pvivos) + 1; 
                          }

                        }
                        if(0.5<rdh<=1){
                          this.hsanos = parseFloat(this.hsanos) + 1;
                        }
                      }
                    }
                  }
                  this.gneta = parseFloat(this.hsanos) * parseFloat(this.pHuevo) + parseFloat(this.pvivos) * parseFloat(this.pPollo);
                  var obj ={
                    'SIM': s,
                    'GNETA(Bs)': this.gneta.toFixed(2),
                    'HSANOS': this.hsanos,
                    'HROTOS' : this.hrotos,
                    'PVIVOS' : this.pvivos,
                    'PMUERTOS': this.pmuertos
                  }
                  this.listado.push(obj);
                  
                  this.gnetaSum = this.gnetaSum + parseFloat(this.gneta.toFixed(2));
                  console.log(this.gnetaSum )
                  this.hsanosSum = this.hsanosSum + parseFloat(this.hsanos.toFixed(2));
                  this.hrotosSum = this.hrotosSum + parseFloat(this.hrotos.toFixed(2));
                  this.pmuertosSum = this.pmuertosSum + parseFloat(this.pmuertos.toFixed(2));
                  this.pvivosSum = this.pvivosSum + parseFloat(this.pvivos.toFixed(2));
                }
                console.log(this.gnetaSum )
                var auxgnetaMed = this.gnetaSum / parseFloat(this.sim);
                this.gnetaMed = auxgnetaMed.toFixed(2);
                var auxhsanosMed = this.hsanosSum / parseFloat(this.sim);
                this.hsanosMed = auxhsanosMed.toFixed(2);
                var auxhrotosMed = this.hrotosSum / parseFloat(this.sim);
                this.hrotosMed = auxhrotosMed.toFixed(2);
                var auxpmuertosMed = this.pmuertosSum / parseFloat(this.sim);
                this.pmuertosMed = auxpmuertosMed.toFixed(2);
                var auxpvivosMed = this.pvivosSum / parseFloat(this.sim);
                this.pvivosMed = auxpvivosMed.toFixed(2);

                this.mensajeAceptar("Se termino la simulacion");
              }else{
                this.mensajeError("El precio unitario del huevo y del pollo debe ser mayor a 0")
              }
            }else{
              this.mensajeError("Ingrese un numero positivo")
            }
          }else{
            this.mensajeError("Ingrese un numero positivo")
          }
        },
        poisson(med){
          var n = 0;
          var t = 1.0;
          var c = 0;
          var lim = Math.exp(-parseFloat(med))
          do{
            n = n + 1;
            c = parseFloat(t)*Math.random();
            t = parseFloat(c);
          }while(parseFloat(t) > lim);
          n = n - 1;
          return n;
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