function GridGenerator(props: GridGenerator) {
  const { grid } = props;
  return (
    <table>
      {grid.map(({ cols, key: rowKey }) => (
        <tr key={rowKey}>
          {cols.map(({ val, key: colKey }) => (
            <td key={colKey}>{val}</td>
          ))}
        </tr>
      ))}
    </table>
  );
}

export default GridGenerator;
