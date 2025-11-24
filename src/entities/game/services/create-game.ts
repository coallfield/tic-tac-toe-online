import { gameRepository } from '@/entities/game/repositories/game'
import { PlayerEntity } from '@/entities/game/domain'
import cuid from 'cuid'
import { left, right } from '@/shared/lib/either'

export async function createGame(player: PlayerEntity) {
    const playerGames = await gameRepository.gamesList({
        players: { some: { id: player.id } },
        status: 'idle',
    })

    const isGameInIdleStatus = playerGames.some(
        (game) => game.status === 'idle' && game.creator.id === player.id,
    )

    if (isGameInIdleStatus) {
        return left('user-can-create-only-one-game' as const)
    }

    const newGame = await gameRepository.createGame({
        id: cuid(),
        creator: player,
        status: 'idle',
    })

    return right(newGame)
}
