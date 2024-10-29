import { darken, rem } from "polished";
import Button from ".";
import { render, screen } from "~/utils/test";
import { theme } from "~/lib/theme";

describe("Button", () => {
  it("Should show button", () => {
    render(<Button>Ativar</Button>);
    expect(screen.getByRole("button", { name: /ativar/i }));
  });

  it("Should render correctly size", () => {
    const { getByText } = render(
      <>
        <Button size="small">Small</Button>
        <Button size="default">Default</Button>
        <Button size="large">Large</Button>
      </>
    );
    expect(getByText("Small")).toHaveStyle(`height: ${rem(28)}`);
    expect(getByText("Default")).toHaveStyle(`height: ${rem(38)}`);
    expect(getByText("Large")).toHaveStyle(`height: ${rem(48)}`);
  });

  it("Should render correctly color", () => {
    const { getByText } = render(
      <>
        <Button color="danger">Danger</Button>
        <Button color="warning">Warning</Button>
        <Button color="success">Success</Button>
      </>
    );
    expect(getByText("Danger")).toHaveStyle(`background-color: ${darken(0.05, theme.colors.danger)}`);
    expect(getByText("Warning")).toHaveStyle(`background-color: ${darken(0.05, theme.colors.warning)}`);
    expect(getByText("Success")).toHaveStyle(`background-color: ${darken(0.05, theme.colors.success)}`);
  });

  it("Should render blocked or not", () => {
    const { getByText } = render(
      <>
        <Button block>full</Button>
        <Button>auto</Button>
      </>
    );
    expect(getByText("full")).toHaveStyle(`width: 100%`);
    expect(getByText("auto")).toHaveStyle(`width: auto`);
  });
});
