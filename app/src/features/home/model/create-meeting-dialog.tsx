import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface CreateMeetingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateMeetingDialog({ open, onOpenChange }: CreateMeetingDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>새 회의 생성</DialogTitle>
          <DialogDescription>새로운 회의를 생성하고 참가자를 초대하세요.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">회의 이름</Label>
            <Input placeholder="회의 이름을 입력하세요" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="bg-green-500 hover:bg-green-600">
            회의 생성
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
