import styled from 'styled-components';

interface NumBoxSProps {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

NumBoxS.defaultProps = {
  placeholder: '값을 입력하시오.',
  value: '',
  onChange: () => null,
};

function NumBoxS({ label, placeholder, value, onChange }: NumBoxSProps) {
  return (
    <Label htmlFor="title">
      {label}
      <Input value={value} onChange={onChange} placeholder={placeholder} />
    </Label>
  );
}

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  font-size: ${({ theme }) => theme.fonts.size.md};
  user-select: none;
`;

const Input = styled.input.attrs({ type: 'number' })`
  margin-top: 15px;
  padding-left: 12px;
  background-color: ${({ theme }) => theme.colors.gray040};
  ::placeholder {
    color: ${({ theme }) => theme.colors.gray200};
  }
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  font-size: ${({ theme }) => theme.fonts.size.base};
  ${({ theme }) => theme.media.mobile} {
    width: 100%;
  }
  height: 40px;
  width: 100%;
`;

export default NumBoxS;
