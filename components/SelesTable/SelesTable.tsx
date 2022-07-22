import s from './SelesTable.module.scss'

const SelesTable = () => {
	return (
		<section className={s.sales_table}>
			<p className={s.sales_table__header}>Tus ventas hoy</p>
			<table>
				<thead>
					<tr>
						<th>Transacción</th>
						<th>Fecha y hora</th>
						<th>Método de pago</th>
						<th>ID transacción Bold</th>
						<th>Monto</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>asd</td>
						<td>asd</td>
						<td>asd</td>
						<td>asd</td>
						<td>asd</td>
					</tr>
				</tbody>
			</table>
		</section>
	)
}

export default SelesTable
