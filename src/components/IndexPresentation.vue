<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ excerpt }}</p>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "IndexPresentation",
  data: function() {
    return {
      title: "What should i wear today?",
      excerpt:
        "This is a question you ask yourself every single day, and let's face it: we always fall back to the same two outfits. ",
      text:
        "Try now Kado! The App which proposes you your next outfit! In Kado you can register your clothing items and the app will propose you a new individual Outfit. Let's #maketheworldunique"
    };
  }
};
</script>

<style scoped>
p {
  margin-top: 25px;
  font-size: 21px;

  -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 1s; /* Firefox < 16 */
  -ms-animation: fadein 1s; /* Internet Explorer */
  -o-animation: fadein 1s; /* Opera < 12.1 */
  animation: fadein 1s;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Internet Explorer */
@-ms-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
