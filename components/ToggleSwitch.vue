<template>
    <div class="toggle">
        <fieldset class="toggle__fieldset superb">
            <input type="radio" id="monthly" value="monthly" name="toggle" checked />
            <label for="monthly">Monthly</label>
            <input type="radio" id="yearly" value="yearly" name="toggle" />
            <label for="yearly">Yearly</label>
            <span class="toggle__switch"></span>
        </fieldset>
    </div>
</template>

<script>
export default {
    name: "ToggleSwitch"
};
</script>