module.exports = {
  theme: {
    fontFamily: {
      body: ['"Open Sans"', 'sans-serif']
    },
    extend: {
      height: {
        "72" : "17rem",
        "80": "18rem"
      }
    },
  },
  variants: {},
  plugins: [
    function({ addBase, config }) {
      addBase({
        'p': { fontSize: config('theme.fontSize.lg') },
        'h1': { fontSize: config('theme.fontSize.4xl') },
        'h2': { fontSize: config('theme.fontSize.3xl') },
        'h3': { fontSize: config('theme.fontSize.2xl') },
        'pre': { padding: "2rem", overflow: "auto", overflowWrap: "break-word", marginBottom:"1rem", whiteSpace:"pre-wrap"},
        'pre code': { whiteSpace:"pre-wrap", fontSize: config('theme.fontSize.sm') } 
      })
    }
  ],
}
