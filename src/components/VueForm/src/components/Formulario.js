
export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data() {
    return {
      formData: this.getInitialData(),
      formState: {},
      nameMin: 5,
      nameMax: 15,
      edadMin: 18,
      edadMax: 120,
      url: "https://61886832057b9b00177f9c5d.mockapi.io/FernandoBernasconi",
      ingresoFomulario: [],
    }
  },
  computed: {

  },
  mounted() {
    console.log('formulario -> mounted()')
    this.getDataFromServer()
  },

  methods: {

    getInitialData() {
      return {
        nombre: "",
        edad: "",
        email: ""
      }
    },

    enviar() {
      let usuarios = { ...this.formData }
      console.log(usuarios)

      this.ingresoFomulario.push(usuarios)

      this.formData = this.getInitialData()

      this.formState._reset()
    }
  }
}


