module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
			borderRadius: {
				large: '3rem'
			}
		},
  },
  variants: {
    extend: {
			width: ["responsive", "hover", "focus"],
			display: ["group-hover"],
			justifyContent: ["group-hover"],
			margin: ["group-hover"],
			borderWidth: ["last"]
		},
  },
  plugins: [],
}
