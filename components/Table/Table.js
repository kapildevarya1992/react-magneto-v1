const getTable = (attributes) => { 

  let stickyHeader = attributes.stickyHeader ?'stickyHeader' : ''
  return (
  `<TableContainer style={{maxHeight: 440}}>
  <Table ${stickyHeader} >
    <TableHead>
      <TableRow>
      {${attributes.id}Columns.map((column) => (
            <TableCell key={column.id}>
              {column.label}
            </TableCell>
          ))}
      </TableRow>
    </TableHead>
    <TableBody>
    {${attributes.id}Rows.map((row) => {
          return (
            <TableRow key={row.id}>
              {${attributes.id}Columns.map((column) => {
                const value = row[column.id];
                return (
                  <TableCell key={column.id} >
                    {value}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
    </TableBody>
  </Table>
</TableContainer> `    
  )
}

module.exports = {getTable}