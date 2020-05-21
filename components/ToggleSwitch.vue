<template>
    <div class="toggle">
        <input type="radio" id="monthly" value="monthly" name="toggle" checked />
        <label for="monthly">Monthly</label>
        <input type="radio" id="yearly" value="yearly" name="toggle" />
        <label for="yearly">Yearly</label>
    </div>
</template>

<script>
export default {
    name: "ToggleSwitch"
};
</script>