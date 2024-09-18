interface Cols {
  val?: number | string;
  key?: number | string;
}

interface GridGenerator {
  grid: { cols: Cols[]; key: string | number }[];
}
