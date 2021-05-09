module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
			width: ["responsive", "hover", "focus"],
			display: ["group-hover"],
			justifyContent: ["group-hover"],
			margin: ["group-hover"]
		},
  },
  plugins: [],
}
