import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components/Select";

function Stats() {
  return (
    <section className="stats">
      <Select className="stats__select">
        <Button className="stats__select-button">
          <SelectValue className="stats__select-item" />
          <span>⌄</span>
        </Button>

        <Popover>
          <ListBox>
            <ListBoxItem>HISTORY</ListBoxItem>
          </ListBox>
        </Popover>
      </Select>

      <div className="stats__container">
        <div className="stats__card">
          <span className="stats__card-heading">OPEN</span>
          <span className="stats__card-details">0.8516</span>
        </div>

        <div className="stats__card">
          <span className="stats__card-heading">LAST</span>
          <span className="stats__card-details">0.8530</span>
        </div>

        <div className="stats__card">
          <span className="stats__card-heading">CHANGE</span>
          <span className="stats__card-details stats__card-details--positive">
            +0.0014
          </span>
        </div>

        <div className="stats__card">
          <span className="stats__card-heading">% CHANGE</span>
          <span className="stats__card-details stats__card-details--positive">
            <span>▲</span> +0.16%
          </span>
        </div>
      </div>
    </section>
  );
}

export default Stats;
