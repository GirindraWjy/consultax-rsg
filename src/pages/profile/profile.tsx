import { createSignal, For, Show, type Component } from "solid-js";
import { Input, InputGroup, InputRightElement, Spinner } from "@hope-ui/solid";
import "./profile.css";
import header from "../../assets/svg/header-img.svg"
import search from "../../assets/png/search.png"
import { useNavigate } from "@solidjs/router";
import PageWrapper from "../wrapper/wrapper";
import { InputLeftElement, Tooltip } from "@hope-ui/solid";

const ProfilePage: Component = () => {
    const [searchTerm, setSearchTerm] = createSignal("");
    const [loading, setLoading] = createSignal(false);

    const dataUser = [
        {
            "name": "Muhammad Nabil Subagja Hadiwidjaja",
            "no": "6285640406756"
        },
        {
            "name": "Gabrielle Selma Silalahi",
            "no": "6282328323563"
        },
        {
            "name": "Louis Fabiano Wu",
            "no": "6285355322030"
        },
        {
            "name": "Risang Agnijati",
            "no": "6282136326124"
        },
        {
            "name": "Muhammad Sulthon Nur Syafik",
            "no": "6288805743363"
        }
    ]

    const filteredUsers = () =>
        dataUser.filter(user =>
            user.name.toLowerCase().includes(searchTerm().toLowerCase())
        );

    const handleInput = (e: InputEvent) => {
        const value = (e.currentTarget as HTMLInputElement).value;
        setSearchTerm(value);

        setLoading(true);
        setTimeout(() => setLoading(false), 300);
    };

    return (
        <PageWrapper>
            <div class="pl-[5vw] pe-[5vw] font-[Plus_Jakarta_Sans] flex flex-col gap-8 hidden md:block">
                <p class="profile-title text-3xl">Hi There, Find your expertise now 👋</p>
                <img src={header} alt="" class="img-header w-full" />
                <InputGroup>
                    <Input
                        style={{
                            background: "white",
                            "border-radius": "2vh",
                            "box-shadow": "0 4px 6px rgba(76, 60, 227, 0.4)"
                        }}
                        height="3vh"
                        _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none" }}
                        placeholder="Find your consultant..."
                        onInput={handleInput}
                    />
                    <InputLeftElement
                        style={{
                            top: "50%",
                            transform: "translateY(-50%)",
                            left: "1%",
                            width: "2.5vh",
                            height: "2.5vh",
                            display: "flex",
                            "align-items": "center",
                            "justify-content": "center"
                        }}
                    >
                        <Show when={loading()} fallback={<img src={search} alt="search" />}>
                            <Spinner size="xs" color="purple.500" />
                        </Show>
                    </InputLeftElement>
                </InputGroup>
                <div class="grid grid-cols-10 gap-6">
                    <Show
                        when={!loading()}
                        fallback={
                            <div class="col-span-10 flex justify-start items-center h-32">
                                <Spinner size="md" color="purple.500" />
                            </div>
                        }
                    >
                        <For each={filteredUsers()}>
                            {(user) => (
                                <a
                                    href={`https://wa.me/${user.no}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="col-span-2"
                                >
                                    <Tooltip label={user.name}>
                                        <div class="card-user bg-gradient-to-b from-[#2F22B0] to-[#0C0458] h-full flex flex-col justify-center text-white rounded-lg shadow-md">
                                            <div class="text-sm p-6 text-xl text-center">{user.name}</div>
                                        </div>
                                    </Tooltip>
                                </a>
                            )}
                        </For>
                    </Show>
                    <Show when={filteredUsers().length === 0 && !loading()}>
                        <div class="col-span-10 text-center text-gray-500">No user found</div>
                    </Show>
                </div>
            </div>


            {/* MOBILE VIEW */}
            <div class="pl-[5vw] pe-[5vw] pt-18 font-[Plus_Jakarta_Sans] flex flex-col gap-4 block md:hidden">
                <div>
                    <p class="profile-title-mobile text-lg">Hi There, Find your expertise now 👋</p>
                    <img src={header} alt="" class="img-header-mobile w-full" />
                </div>
                <InputGroup>
                    <Input
                        style={{
                            background: "white",
                            "border-radius": "1vh",
                            "box-shadow": "0 4px 6px rgba(76, 60, 227, 0.4)"
                        }}
                        height="3vh"
                        _focus={{ boxShadow: "none", borderColor: "#d9d9d9", outline: "none" }}
                        placeholder="Find your consultant..."
                        onInput={handleInput}
                    />
                    <InputLeftElement
                        style={{
                            top: "50%",
                            transform: "translateY(-50%)",
                            left: "5%",
                            width: "1.5vh",
                            height: "1.5vh",
                            display: "flex",
                            "align-items": "center",
                            "justify-content": "center"
                        }}
                    >
                        <Show when={loading()} fallback={<img src={search} alt="search" />}>
                            <Spinner size="xs" color="purple.500" />
                        </Show>
                    </InputLeftElement>
                </InputGroup>
                <div class="grid grid-cols-12 gap-6">
                    <Show
                        when={!loading()}
                        fallback={
                            <div class="col-span-10 flex justify-start items-center h-32">
                                <Spinner size="md" color="purple.500" />
                            </div>
                        }
                    >
                        <For each={filteredUsers()}>
                            {(user) => (
                                <a
                                    href={`https://wa.me/${user.no}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="col-span-6"
                                >
                                    <Tooltip label={user.name}>
                                        <div class="card-user bg-gradient-to-b from-[#2F22B0] to-[#0C0458] h-full flex flex-col justify-center text-white rounded-lg shadow-md">
                                            <div class="text-sm p-4 text-md text-center">{user.name}</div>
                                        </div>
                                    </Tooltip>
                                </a>
                            )}
                        </For>
                    </Show>
                    <Show when={filteredUsers().length === 0 && !loading()}>
                        <div class="col-span-12 text-center text-gray-500">No user found</div>
                    </Show>
                </div>
            </div>
        </PageWrapper>
    );
};

export default ProfilePage;
