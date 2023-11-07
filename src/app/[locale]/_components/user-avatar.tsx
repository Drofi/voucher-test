import { minidenticon } from 'minidenticons';
import { type UserData } from '~/server/storage/user';

type Props = { className?: string; user: UserData };

export default function UserAvatar({ className, user }: Props) {
    const svgURI =
        'data:image/svg+xml;utf8,' +
        encodeURIComponent(minidenticon(user.name, 90));

    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img className={className} src={svgURI} alt={user.name} />
    );
}
