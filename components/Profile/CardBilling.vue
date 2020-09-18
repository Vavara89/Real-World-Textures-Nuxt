<template>
  <table style="width: 621px;">
    <tbody>
    <tr>
      <td style="width: 250px;" class="is-first">
        Payment Method
      </td>
      <td style="width: 200px;">
        CC Ending with 4329
      </td>
      <td style="width: 134px;">
        <img src="@/assets/img/cards/mastercard.png" class="bank">
      </td>
      <td style="width: 92px;">
                          <span><a href="#" class="buttonek"
                                   @click="toggleMessage('payment')">Edit</a></span>
      </td>
      <td style="width: 92px;">
        <span><a href="#" class="buttonek">Remove</a></span>
      </td>
    </tr>
    <tr>
      <td style="width: 250px;" class="is-first top">
        Billing Address
      </td>
      <td style="width: 200px;">
        Vyhoňkopec 1471
        735 32 Rychvald
        Czech republic
        <br><br>
        VAT: 12345678
      </td>
      <td style="width: 134px;">
        &nbsp;
      </td>
      <td style="width: 92px;">
                          <span><a href="#" class="buttonek"
                                   @click="toggleMessage('address')">Edit</a></span>
      </td>
      <td style="width: 92px;">
        &nbsp;
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "CardBilling"
};
</script>
