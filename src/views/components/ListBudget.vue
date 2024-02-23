<template>
	<div class="scroll-horizontal mb-3" style="width: 100%; overflow-x: auto">
		<ul class="text-center list-group list-group-horizontal d-flex">
			<li
				v-for="budget in budgets"
				:key="budget.id"
				class="list-group-item rounded-pill me-2"
			>
				{{ budget.month }}
			</li>
		</ul>
	</div>
</template>

<script>
import { get } from "../../api.js";

export default {
	data() {
		return {
			budgets: [],
		};
	},
	created() {
		get("/api/budgets").then((res) => {
			console.log(res.data.data);
			res.data.data.map((item) => {
				this.addBudget(item);
			});
		});
	},
	methods: {
		addBudget(item) {
      const budget = {
					id: item.id,
					month: this.formatMonth(item.month),
				}
      this.budgets.push(budget)
		},
		formatMonth(date) {
			const dateTime = new Date(date);
			const meses = [
				"Janeiro",
				"Fevereiro",
				"Março",
				"Abril",
				"Maio",
				"Junho",
				"Julho",
				"Agosto",
				"Setembro",
				"Outubro",
				"Novembro",
				"Dezembro",
			];
			const monthName = meses[dateTime.getMonth()];
			const year = dateTime.getFullYear();
			const dateFormated = monthName + " " + year;
			console.log(dateFormated);
			return dateFormated;
		},
	},
};
</script>
