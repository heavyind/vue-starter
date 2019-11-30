import Trans from "../Trans.vue";
import { mapState } from "vuex";


export default {
  components: {
    Trans
  },
  props: {
    name: {
      type: String,
      required: false
    },
    initOnly: {
      type: Boolean,
      required: false,
      default: false
    },
    delay: {
      type: Number,
      required: false,
      default: 0
    },
    duration: {
      type: Number,
      required: false
    }
  },
  computed: {
    ...mapState({
      transCurrent: state => state.trans.transCurrent,
      transCurrentName: state => state.trans.transCurrent.name
    })
  }
};
