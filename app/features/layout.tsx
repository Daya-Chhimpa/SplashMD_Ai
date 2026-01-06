import AuthGuard from '../components/shared/AuthGuard';

export default function FeaturesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AuthGuard>
            {children}
        </AuthGuard>
    );
}
