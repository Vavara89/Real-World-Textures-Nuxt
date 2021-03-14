export default {
  methods: {
    handlePointerEvent(enable, index) {
      console.log('handlePointerEvent', enable, index);
      const items = isNaN(index)
        ? document.querySelectorAll(`.texture`)
        : document.querySelectorAll(`.texture:not([data-index="${index}"]`);
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        item.style.pointerEvents = enable ? 'auto' : 'none';
      }
    },
  }
}
